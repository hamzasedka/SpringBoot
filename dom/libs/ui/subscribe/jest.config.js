module.exports = {
  name: 'ui-subscribe',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/subscribe',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
