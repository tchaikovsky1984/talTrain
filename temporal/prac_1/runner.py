import sys
import asyncio
from GreeteSomeone import GreetSomeone

async def main():
    name = sys.argv[1]
    greeter = GreetSomeone()
    greeting = await greeter.greet(name)
    print(greeting)

if __name__ == "__main__":
    asyncio.run(main())
