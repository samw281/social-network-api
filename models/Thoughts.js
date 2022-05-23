const {schema, model} = require('mongoose');

const thoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        defaultValue: new Date,
        get: date => date.toDateString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        reactionSchema
    ]
},
{
    toJSON: {
        getters: true
    },
    id: false
});

thoughtsSchema.virtual('reactionsCount').get(()=> this.reactions.length);

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;