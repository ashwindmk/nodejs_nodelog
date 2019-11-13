'use strict';

let level = 3;

module.exports = {
    setLevel: (newLevel) => {
        level = newLevel;
    },

    getLevel: () => {
        return level;
    },

    log: (messages, join) => {
        if (level >= 3) {
            let msg;
            if (messages instanceof Array) {
                msg = messages.join(join);
            } else {
                msg = messages;
            }
            console.log((new Date()) + ': ' + msg);
        }
    },

    info: (messages, join) => {
        if (level >= 2) {
            let msg;
            if (messages instanceof Array) {
                msg = messages.join(join);
            } else {
                msg = messages;
            }
            console.info((new Date()) + ': ' + msg);
        }
    },

    debug: (messages, join) => {
        if (level >= 1) {
            let msg;
            if (messages instanceof Array) {
                msg = messages.join(join);
            } else {
                msg = messages;
            }
            console.debug((new Date()) + ': ' + msg);
        }
    },

    error: function(messages, join) {
        if (level >= 0) {
            let msg;
            if (messages instanceof Array) {
                msg = messages.join(join);
            } else {
                msg = messages;
            }
            console.error((new Date()) + ': ' + msg);
        }
    }
}
