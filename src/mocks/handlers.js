import { rest } from "msw";
import { MESSAGES } from "../api";
import { ERROR_MESSAGE, OSM_XML } from "./mockData";

export const handlers = [
    rest.get("https://www.openstreetmap.org/api/0.6/map", (req, res, ctx) => {

        const coordinates = req.url.searchParams.get("bbox")

        switch (coordinates) {
            case ",,,":
                return res(
                    ctx.status(400),
                    ctx.text(ERROR_MESSAGE.NO_INPUT)
                )
            case "3,2,1,0":
                return res(
                    ctx.status(400),
                    ctx.text(ERROR_MESSAGE.LAT_LONG_MIN_MAX)
                )
            case "0,1,2,3":
                return res(
                    ctx.status(400),
                    ctx.text(ERROR_MESSAGE.REQUEST_TOO_LARGE)
                )
            case "93.09333,74.31357,93.09908,74.31448":
                return res(
                    ctx.text(MESSAGES.ERROR_NO_OSM_DATA)
                )
            case "13.37084,59.96254,13.39385,59.96929":
                return res(
                    ctx.text(OSM_XML)
                )
            default:
                console.error(`add handler for ${req.url.toString()}`)
                return res(ctx.status(500))
        }
    }),

    rest.get("*", (req, res, ctx) => {
        console.error(`add handler for ${req.url.toString()}`)
        return res(ctx.status(500))
    }),
]