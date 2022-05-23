const {schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: { 
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, 'Must be in email format']
        },
        thoughts: {
            Thoughts: [
                {
                    type: schema.type.objectId,
                    ref: 'Thoughts'
                }
            ]
        },
        freinds: [
                {
                    type: schema.type.objectId,
                    ref: 'Users'
                }
            ]
        },
        {
            toJSON: {
                virtuals: true
            },
            id: false
        }
);

userSchema.virtual('friendCount').get(()=> this.freinds.length);

const Users = model('Users', userSchema);

module.exports = Users;