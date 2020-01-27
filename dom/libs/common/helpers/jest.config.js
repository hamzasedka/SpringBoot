module.exports = {
  name: 'common-helpers',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/helpers',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
