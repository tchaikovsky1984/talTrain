import asyncio

from temporalio import activity
from temporalio.client import Client
from temporalio.worker import Worker

from GreeteSomeone import GreetSomeone
from act import failure_prone_function

async def main():
    client = await Client.connect("localhost:7233", namespace="default")
    worker = Worker(client, task_queue="greeting-tasks", workflows=[GreetSomeone], activities=[failure_prone_function])
    await worker.run()

if __name__ == "__main__":
    asyncio.run(main())

