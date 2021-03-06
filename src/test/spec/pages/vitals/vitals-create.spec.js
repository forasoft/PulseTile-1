'use strict';
import VitalsCreateComponent from '../../../../app/rippleui/pages/vitals/vitals-create.component';
import '../../../../app/index';

describe('VitalsCreateComponent', function() {

  beforeEach(angular.mock.module('ripple-ui'));

  let scope, ctrl, controller, template, stateParams, state, ngRedux, referralsActions, usSpinnerService;
  
  beforeEach(inject(($injector, $controller, _$state_, _$stateParams_, _$ngRedux_, _patientsActions_, _vitalsActions_, _serviceRequests_) => {
    controller = $controller;
    scope = $injector.get('$rootScope').$new();
    state = _$state_;

    template = VitalsCreateComponent.template;
    ctrl = controller(VitalsCreateComponent.controller, {
      $scope: scope,
      $state: state,
      $stateParams: _$stateParams_,
      $ngRedux: _$ngRedux_,
      patientsActions: _patientsActions_,
      vitalsActions: _vitalsActions_,
      serviceRequests: _serviceRequests_
    });
  }));


  it('Template exist', function() {
    expect(template).toBeDefined();
  });
});