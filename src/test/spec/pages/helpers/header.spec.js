'use strict';
import HeaderComponent from '../../../../app/rippleui/header-bar/header.component.js';
import '../../../../app/index';

describe('HeaderComponent', function() {

    beforeEach(angular.mock.module('ripple-ui'));

    let scope, ctrl, controller, template, state, rootScope, ngRedux, serviceRequests, patientsActions;
    
    beforeEach(inject(($injector, $controller, _$rootScope_, _$state_, _$stateParams_,_$ngRedux_, _patientsActions_, _serviceRequests_) => {
        controller = $controller;
        scope = $injector.get('$rootScope').$new();
        state = _$state_;
        serviceRequests = _serviceRequests_;
        rootScope = _$rootScope_;

        template = HeaderComponent.template;
        ctrl = controller(HeaderComponent.controller, {
            $scope: scope,
            $state: state,
            $stateParams: _$stateParams_,
            $ngRedux: _$ngRedux_,
            patientsActions: _patientsActions_,
            serviceRequests: serviceRequests
        });
    }));
    beforeEach(function() {
        scope.title = 'IDCR';
        rootScope.searchMode = false;
        
        spyOn(scope, 'setTitle');
        spyOn(scope, 'switchDirectByRole');
        spyOn(scope, 'setLoginData');
        spyOn(scope, 'login');
        spyOn(ctrl, 'goBack');
        spyOn(ctrl, 'goChart');
        spyOn(ctrl, 'goProfile');
        spyOn(ctrl, 'signout');
        spyOn(ctrl, 'containsReportString');
        spyOn(ctrl, 'containsSettingString');
        spyOn(ctrl, 'containsPatientString');
        spyOn(ctrl, 'containsReportTypeString');
        spyOn(ctrl, 'processReportTypeMode');
        spyOn(ctrl, 'processReportMode');
        spyOn(ctrl, 'processSettingMode');
        spyOn(ctrl, 'processPatientMode');
        spyOn(ctrl, 'checkExpression');
        spyOn(ctrl, 'searchFunction');
        spyOn(ctrl, 'cancelSearchMode');
        spyOn(ctrl, 'cancelReportType');
        spyOn(ctrl, 'changeNavTab');
        spyOn(ctrl, 'activeNavTab');
        spyOn(ctrl, 'getPageComponents');
        spyOn(ctrl, 'clickSidebarBtn');
        spyOn(ctrl, 'getPopulateHeaderSearch');
        spyOn(ctrl, 'getPageHeader');
        spyOn(ctrl, 'checkIsShowPreviousBtn');

        scope.setTitle();
        scope.switchDirectByRole({role: 'PHR'});
        scope.setLoginData({data:{role: 'PHR'}});
        scope.login();
        ctrl.goBack();
        ctrl.goChart();
        ctrl.goProfile();
        ctrl.signout();
        ctrl.containsReportString();
        ctrl.containsSettingString();
        ctrl.containsPatientString();
        ctrl.containsReportTypeString();
        ctrl.processReportTypeMode();
        ctrl.processReportMode();
        ctrl.processSettingMode();
        ctrl.processPatientMode();
        ctrl.checkExpression();
        ctrl.searchFunction();
        ctrl.cancelSearchMode();
        ctrl.cancelReportType();
        ctrl.changeNavTab();
        ctrl.activeNavTab();
        ctrl.getPageComponents();
        ctrl.clickSidebarBtn();
        ctrl.getPopulateHeaderSearch();
        ctrl.getPageHeader();
        ctrl.checkIsShowPreviousBtn();
    });

    it('Controller exist', function() {
        expect(ctrl).toBeDefined();
    });
    it('Template exist', function() {
        expect(template).toBeDefined();
    });
    it("serviceRequests exist", function() {
        expect(serviceRequests).toBeDefined();
    });
    it("$scope.title exist", function() {
        expect(scope.title).toBeDefined();
    });
    it("setTitle was called", function() {
        expect(scope.setTitle).toHaveBeenCalled();
    });
    it("switchDirectByRole was called", function() {
        expect(scope.switchDirectByRole).toHaveBeenCalled();
    });
    it("setLoginData was called", function() {
        expect(scope.setLoginData).toHaveBeenCalled();
    });
    it("reportMode was called with params", function() {
        expect(scope.reportMode).toBe(false);
    });
    it("login was called", function() {
        expect(scope.login).toHaveBeenCalled();
    });
    it("goHome was called", function() {
        expect(ctrl.goBack).toHaveBeenCalled();
    });
    it("goChart was called", function() {
        expect(ctrl.goChart).toHaveBeenCalled();
    });
    it("goProfile was called", function() {
        expect(ctrl.goProfile).toHaveBeenCalled();
    });
    it("signout was called", function() {
        expect(ctrl.signout).toHaveBeenCalled();
    });
    it("containsReportString was called", function() {
        expect(ctrl.containsReportString).toHaveBeenCalled();
    });
    it("containsSettingString was called", function() {
        expect(ctrl.containsSettingString).toHaveBeenCalled();
    });
    it("containsPatientString was called", function() {
        expect(ctrl.containsPatientString).toHaveBeenCalled();
    });
    it("containsReportTypeString was called", function() {
        expect(ctrl.containsReportTypeString).toHaveBeenCalled();
    });
    it("processReportTypeMode was called", function() {
        expect(ctrl.processReportTypeMode).toHaveBeenCalled();
    });
    it("processReportMode was called", function() {
        expect(ctrl.processReportMode).toHaveBeenCalled();
    });
    it("searchExpression to be pt", function() {
        expect(scope.search.searchExpression).toEqual('');
    });
    it("processSettingMode was called", function() {
        expect(ctrl.processSettingMode).toHaveBeenCalled();
    });
    it("processPatientMode was called", function() {
        expect(ctrl.processPatientMode).toHaveBeenCalled();
    });
    it("checkExpression was called", function() {
        expect(ctrl.checkExpression).toHaveBeenCalled();
    });
    it("searchFunction was called", function() {
        expect(ctrl.searchFunction).toHaveBeenCalled();
    });
    it("cancelSearchMode was called", function() {
        expect(ctrl.cancelSearchMode).toHaveBeenCalled();
    });
    it("cancelReportType was called", function() {
        expect(ctrl.cancelReportType).toHaveBeenCalled();
    });
    it("changeNavTab was called", function() {
        expect(ctrl.changeNavTab).toHaveBeenCalled();
    });
    it("activeNavTab was called", function() {
        expect(ctrl.activeNavTab).toHaveBeenCalled();
    });
    it("getPageComponents was called", function() {
        expect(ctrl.getPageComponents).toHaveBeenCalled();
    });
    it("clickSidebarBtn was called", function() {
        expect(ctrl.clickSidebarBtn).toHaveBeenCalled();
    });
    it("getPopulateHeaderSearch was called", function() {
        expect(ctrl.getPopulateHeaderSearch).toHaveBeenCalled();
    });
    it("getPageHeader was called", function() {
        expect(ctrl.getPageHeader).toHaveBeenCalled();
    });
    it("checkIsShowPreviousBtn was called", function() {
        expect(ctrl.checkIsShowPreviousBtn).toHaveBeenCalled();
    });
});