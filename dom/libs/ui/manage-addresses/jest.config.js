module.exports = {
  name: 'ui-manage-addresses',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/manage-addresses',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
