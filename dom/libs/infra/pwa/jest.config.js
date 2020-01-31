module.exports = {
  name: 'infra-pwa',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/infra/pwa',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
