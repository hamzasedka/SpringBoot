module.exports = {
  name: 'domiciliation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/domiciliation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
