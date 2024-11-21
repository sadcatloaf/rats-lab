import { locationsService } from "../services/LocationsService"
import { missionsService } from "../services/MissionsService"
import BaseController from "../utils/BaseController"

export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getAllLocations)
            .get('/:locationId/missions', this.getMissionByLocationId)
    }

    /**
        * 
        * @param {import("express").Request} request
        * @param {import("express").Response} response
        * @param {import("express").NextFunction} next
        */

    async getMissionByLocationId(request, response, next) {
        try {
            const locationId = request.params.locationId
            const missions = await missionsService.getMissionByLocationId(locationId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    /**
     * 
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
