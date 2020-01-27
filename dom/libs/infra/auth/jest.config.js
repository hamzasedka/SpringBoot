module.exports = {
  name: 'infra-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/infra/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
