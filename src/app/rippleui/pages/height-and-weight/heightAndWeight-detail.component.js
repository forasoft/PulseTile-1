let templateHeightAndWeightDetail= require('./heightAndWeight-detail.html');

class HeightAndWeightDetailController {
  constructor($scope, $state, $stateParams, $ngRedux, heightAndWeightActions, usSpinnerService, serviceRequests) {
    // this.edit = function () {
    //   HeightAndWeightModal.openModal(this.currentPatient, {title: 'Edit Height And Weight'}, this.heightAndWeight, this.currentUser);
    // };

    $scope.UnlockedSources = [
      'handi.ehrscape.com'
    ];

    $scope.formDisabled = true;

    this.setCurrentPageData = function (data) {
      if (data.patientsGet.data) {
        this.currentPatient = data.patientsGet.data;
      }
      if (data.heightAndWeight.dataGet) {
        this.heightAndWeight = data.heightAndWeight.dataGet;
        usSpinnerService.stop("heightAndWeightsDetail-spinner");
      }
      if (serviceRequests.currentUserData) {
        this.currentUser = serviceRequests.currentUserData;
      }
    };

    let unsubscribe = $ngRedux.connect(state => ({
      getStoreData: this.setCurrentPageData(state)
    }))(this);

    $scope.$on('$destroy', unsubscribe);

    this.heightAndWeightLoad = heightAndWeightActions.get;
    this.heightAndWeightLoad($stateParams.patientId, $stateParams.heightAndWeightIndex);
  }
}

const HeightAndWeightDetailComponent = {
  template: templateHeightAndWeightDetail,
  controller: HeightAndWeightDetailController
};

HeightAndWeightDetailController.$inject = ['$scope', '$state', '$stateParams', '$ngRedux', 'heightAndWeightActions', 'usSpinnerService', 'serviceRequests'];
export default HeightAndWeightDetailComponent;