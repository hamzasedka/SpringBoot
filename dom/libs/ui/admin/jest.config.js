module.exports = {
  name: 'ui-admin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
