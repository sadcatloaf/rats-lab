import { dbContext } from "../db/DbContext"

class MissionsService {

    async createMission(missionData) {
        const mission = await dbContext.Missions.create(missionData)
        await mission.populate('rat', '-name -picture')
        await mission.populate('location')
        return mission
    }
    async getAllMissions() {
        const missions = await dbContext.Missions.find().populate('rat', "-name -picture").populate('location')
        return missions
    }

    async getMissionByRatId(ratId) {
        const missions = await dbContext.Missions.find({ ratId: ratId }).populate('rat', '-name -picture')
        return missions
    }
    async getMissionByLocationId(locationId) {
        const missions = await dbContext.Missions.find({ locationId: locationId }).populate('rat', '-name -picture')
        return missions
    }

}
export const missionsService = new MissionsService