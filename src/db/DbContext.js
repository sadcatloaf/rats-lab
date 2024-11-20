import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatsSchema } from '../models/Rats';
import { LocationsSchema } from '../models/Locations';
import { MissionsSchema } from '../models/Missions';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatsSchema)
  Locations = mongoose.model('Location', LocationsSchema)
  Missions = mongoose.model('Mission', MissionsSchema)
}

export const dbContext = new DbContext()
