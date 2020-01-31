module.exports = {
  name: 'ui-manage-orders',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/manage-orders',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
