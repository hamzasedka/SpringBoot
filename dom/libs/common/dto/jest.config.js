module.exports = {
  name: 'common-dto',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/dto',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
