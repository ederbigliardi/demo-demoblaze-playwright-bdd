module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: ['tests/support/world.js', 'tests/support/hooks.js', 'tests/steps/**/*.js'],
        format: ['progress'],
        parallel: 1,
        publishQuiet: true
    }
};
