module.exports = {
  name: 'ui-manage-users',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/manage-users',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
