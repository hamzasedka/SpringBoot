module.exports = {
  name: 'ui-manage-documents',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/manage-documents',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
