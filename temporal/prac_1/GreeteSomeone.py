from datetime import timedelta

from temporalio.common import RetryPolicy
from act import failure_prone_function
from temporalio import workflow

@workflow.defn
class GreetSomeone:

    @workflow.run
    async def greet(self, name: str, greeting: str = "Hello") -> str:
        answer = await workflow.execute_activity(
                failure_prone_function,
                5,
                schedule_to_close_timeout=timedelta(seconds=60), 
                retry_policy=RetryPolicy(maximum_attempts=5))
        return answer + "\n" + greeting + ", " + name + "!" + str(answer)

