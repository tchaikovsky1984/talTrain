import aiohttp
from temporalio import activity

class GetJSON:

    def __init__(self, session: aiohttp.ClientSession) -> None:
        self.session = session

    @activity.defn
    async def get_json(self):
        answer = await self.call_json_server()
        return answer

    async def call_json_server(self):
        url = "https://jsonplaceholder.typicode.com/todos/1"
        async with self.session.get(url) as response:
            ans = await response.text()
            return ans
