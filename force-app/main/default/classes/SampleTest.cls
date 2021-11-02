@isTest
private class SampleTest {

    @isTest
    static void firstTest(){
        //setup
        Account accountBeforeInsert = new Account(Name = 'test Account');

        //act
        insert accountBeforeInsert;

        //assert
        Account accountAfterInsert = [SELECT Id, Name FROM Account WHERE Id = :accountBeforeInsert.Id];
        System.assert(accountAfterInsert.Name == accountBeforeInsert.Name);
    }
}