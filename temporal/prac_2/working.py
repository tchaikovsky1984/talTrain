import concurrent.futures
import asyncio

from temporalio.client import Client
from temporalio.worker import Worker

from sync_activity import GetJSONsync
from workflowSync import SyncJob

async def main():
    client = await Client.connect("localhost:7233", namespace="default")

    activities = GetJSONsync()

    with concurrent.futures.ThreadPoolExecutor(max_workers=100) as activity_executor:
        worker = Worker(
            client,
            task_queue="sample-tasks",
            activities=[activities.get_json_sync],
            workflows=[SyncJob],
            activity_executor=activity_executor,
        )
        print("Starting the worker....")
        await worker.run()


if __name__ == "__main__":
    asyncio.run(main())
