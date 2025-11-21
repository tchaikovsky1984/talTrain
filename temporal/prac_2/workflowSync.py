from datetime import timedelta
from temporalio import workflow

with workflow.unsafe.imports_passed_through():
    from sync_activity import GetJSONsync

@workflow.defn
class SyncJob:

    @workflow.run
    async def run(self) -> str:
        answer = await workflow.execute_activity_method(
                GetJSONsync.get_json_sync,
                start_to_close_timeout=timedelta(seconds=60)
                )
        return answer
