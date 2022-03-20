import fs from "fs"
// import { client } from "$lib/gql/gql_client"
// import { createSocial, createTech } from "$lib/gql/gql_queries"

export async function get() {
    const string = fs.readFileSync("./unused/social.json", "utf-8")
    const json = await JSON.parse(string)

    // console.log(json)
    const parsed = Object.keys(json).map((social, idx) => {
        return {
            name: social[0].toUpperCase() + social.slice(1),
            icon: json[social].icon,
            url: json[social].url
        }

        // const res = await client.request(createTech, variables)
        // console.log(res.tech.id)
    })

    const body = []
    parsed.forEach(async (variables, idx) => {
        // const res = await client.request(createSocial, variables)
        body.push({ ...variables, idx })
    })

    return {
        body
    }
}