module.exports = {
  name: 'ui-public',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/public',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
