import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
