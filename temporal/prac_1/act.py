import random
from temporalio import activity

@activity.defn
async def failure_prone_function(num: int) -> str:
    if (float(num)/10) < random.random():
        return "Bonjour, Anshul!"
    else:
        raise Exception()

