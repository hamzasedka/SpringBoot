module.exports = {
  name: 'common-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
