import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async getAll() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
  
  async getById(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId)
    return galaxy
  }

  async create(newGalaxy) {
    const galaxy = await dbContext.Galaxies.create(newGalaxy)
    return galaxy
  }

  async edit(body) {
    const original = await this.getById(body.id)
    original.name = body.name || original.name
    await original.save()
    return original
  }
}

export const galaxiesService = new GalaxiesService()

