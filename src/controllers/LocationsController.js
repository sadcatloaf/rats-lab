import { locationsService } from "../services/LocationsService"
import BaseController from "../utils/BaseController"

export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getAllLocations)
    }

    /**
     * Returns all animals
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */

    async getAllLocations(request, response, next) {
        try {
            const locations = await locationsService.getAllLocations()
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }
}
