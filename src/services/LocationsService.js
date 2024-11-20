import { LocationsController } from "../controllers/LocationsController"
import { dbContext } from "../db/DbContext"

class LoactionsService {
    async getAllLocations() {
        const locations = await dbContext.Locations.find()
        return locations
    }


}
export const locationsService = new LoactionsService