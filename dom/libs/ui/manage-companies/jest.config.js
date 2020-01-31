module.exports = {
  name: 'ui-manage-companies',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/manage-companies',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
