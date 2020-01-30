module.exports = {
  name: 'ui-manage-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/manage-products',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
