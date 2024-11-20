import { dbContext } from "../db/DbContext"

class MissionsService {
    async getAllMissions() {
        const missions = await dbContext.Missions.find().populate('rat',).populate('location')
        return missions
    }


}
export const missionsService = new MissionsService