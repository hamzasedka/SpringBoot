module.exports = {
  name: 'ui-manages-documents',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/manages-documents',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
