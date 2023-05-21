const URL = "http://api.sr.se/api/v2"
let name_to_id = {}

async function list_channels() {
  const url = encodeURI(`${URL}/channels?format=json`)
  const res = await fetch(url)
  return (await present_fetch_result(res)).channels
}

async function get_channel(id) {
  const url = encodeURI(`${URL}/channels/${id}?format=json`)
  const res = await fetch(url)
  return (await present_fetch_result(res)).channel
}

async function present_fetch_result(result) {
  if (result.status < 300) {
    return await result.json()
  } else {
    throw new Error(`${result.status}: ${await result.text()}`)
  }
}

async function main() {
  let channels;
  try {
    channels = await list_channels()
    console.log(channels)
  } catch (err) {
    console.log(`list_channels failed: ${err.message}`)
  }
  for (let c of channels) {
    name_to_id[c.name] = c.id
  }
  console.log(name_to_id)
  try {
    const p1 = await get_channel(name_to_id["P1"])
    console.log(p1)
  } catch (err) {
    console.log(`get_channel failed: ${err.message}`)
  }
}

main()
