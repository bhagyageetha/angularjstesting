/*Sample Unit Test For Controller Scope*/
/*describe('Testing Angular Test Suit',function(){
    describe('Testing Angular Js Controller',function(){
        it("Should Initialize the Title in Scope",function(){
            module('myApp');
            var scope={};
            var ctrl;
            inject(function($controller){
                ctrl=$controller('myCtrl',{$scope:scope});
            });
            expect(scope.name).toBeDefined();
            expect(scope.name).toBe("Geetha");
        });
    });
});*/
/*BeforEach And AfterEach Testing*/
describe('Testing Angular Test Suit',function(){
    beforeEach(module('myApp'));
    describe('Testing Angular Js Controller',function(){
        var ctrl,scope;
    beforeEach(inject(function($controller,$rootScope){
        scope=$rootScope.$new();
        ctrl=$controller('myCtrl',{$scope:scope});
    }));
        afterEach(function(){
            //CleanUP new
        });

        it("Should Initialize the Title in Scope",function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Geetha");
        });
        it('Should add Destination toDistination List',function(){
            expect(scope.distinations).toBeDefined();
            expect(scope.distinations.length).toBe(0);
            scope.newDistination={
                city:"Hyderabad",
                country:"India"
            };
            scope.addDistination();
            expect(scope.distinations.length).toBe(1);
            expect(scope.distinations[0].city).toBe("Hyderabad");
            expect(scope.distinations[0].country).toBe("India");
        });
    });
});