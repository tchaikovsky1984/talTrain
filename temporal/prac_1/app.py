from os import name
import sys
import asyncio

from GreeteSomeone import GreetSomeone
from temporalio.client import Client

async def main():
    client = await Client.connect("localhost:7233", namespace="default")

    ip = input("should we begin?")
    if(ip[0] == "y"):
        handle = await client.start_workflow(
                GreetSomeone.greet,
                sys.argv[1],
                id="greeting",
                task_queue="greeting-tasks"
                )

        print(f"Started workflow with handle_id: {handle.id} and workflow run id : {handle.run_id}")

        res = await handle.result()
        print(f"Result: {res}")
    else:
        print("Okie! Cancelling.")


if __name__ == "__main__":
    asyncio.run(main())
