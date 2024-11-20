import { missionsService } from "../services/MissionsService";
import { ratsService } from "../services/RatsService";
import BaseController from "../utils/BaseController";

export class RatsController extends BaseController {
    constructor() {
        super('api/rats')
        this.router
            .get('', this.getAllRats)
            .get('/:ratId/missions', this.getAllRats)
    }

    /**
   * 
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */

    async getAllRats(request, response, next) {
        try {
            const rats = await ratsService.getAllRats()
            response.send(rats)
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

    async getMissionByRatId(request, response, next) {
        try {
            const ratId = request.params.ratId
            const missions = await missionsService.getMissionByRatId(ratId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}