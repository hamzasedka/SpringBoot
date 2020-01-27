module.exports = {
  name: 'data-ngrx-store',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/data/ngrx-store',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
