const { test } = require('@playwright/test');
const { LoginPage } = require('../../login/pages/LoginPage');
const {ReviewerDashboardPage } = require('../pages/ReviewerDashboardPage');
const { Common } = require('../../utils/Common');

let loginPage;
let reviewerDashboardPage;
let common;



  const testData={
    reviewerEmail:'pewir22403@msback.com',
    reviewerPassword: 'Password1234!!',
    ReviewerEmail:    'pewir22403@msback.com' ,
    ReviewerPassword:   'Password1234!!'    ,
    }; 
  
  test.fixme('Reviewer Dashboard Page (@smoke)', () => {
    test.beforeEach(async ({ page, isMobile }) => {
      loginPage = new LoginPage(page, isMobile);
      reviewerDashboardPage = new ReviewerDashboardPage(page, isMobile)
      common = new Common(page, isMobile);
      managerDashbordPage = new ManagerDashbordPage(page, isMobile);
      managerCommunityPage = new ManagerCommunityPage(page, isMobile);
      editorDashboardPage = new EditorDashboardPage(page, isMobile);
    });
  
  
    test('Validate all sections are displaying for user having Reviewer access', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
    });

    test('Validate if Reviewer can view Dashboard details', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
    });

    test('Validate if Reviewer can  show entries dropdown functionality is working', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardShowEntries();
    });

    test('Validate if Reviewer can use refresh button', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardRefresh();
    });  

    test('Validate if Reviewer can use filter button by by "Urgent"', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardFilter();
    });

    test('Validate Dashboard Plus', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardPlus();
    });  

    test('Validate the ID of the dashboard', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardID();
    });

    test('Validate the status of dashboard', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardStatus();
    });

    test('Validate the project Type of Dashboard ', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardProjectType();
    });
  
    test('Validate if reviewer can short the Dashboard Project by Manager', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardManager();
    });
  
    test('Validate if Reviewer can short the Dashbaord Project by Name', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardName();
    });
  
    test('Validate if Reviewer can short the Dashbaord Project by Channel Name', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard(); 
      await reviewerDashboardPage.clickOnReviewerDashboardChannelName();
    });
  
    test('Validate that the Reviewer can filter projects by clicking "Filter By Source Language"', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardSource();
    });
  
    test('Validate that the Reviewer can filter projects by clicking "Filter By Target"', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardTarget();
    });
  
    test('Validate if Reviewer can sort the dashboard by "View Files"', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardFiles();
    });

   test('Validate if Reviewer can sort the dashboard by "AWC"', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardAWC();
    });

    test('Validate if Reviewer can sort the dashboard by "Editor Deadline"', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardEditorDeadline();
    });  

    test('Validate that the Reviewer can filter projects by clicking "Filter By Expiry"', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardExpiry();
    });

    test('Validate Help link is available and working', async () => {
      await loginPage.navigate();
      await loginPage.clickOnLoginLink();
      await loginPage.enterEmailAddress(testData.reviewerEmail);
      await loginPage.enterPassword(testData.reviewerPassword);;
      await loginPage.clickOnLoginButton();
      await reviewerDashboardPage.clickOnReviewerDashboard();
      await reviewerDashboardPage.clickOnReviewerDashboardHelpBox();
    });

  test('Validate if Reviewer can Post Edit Files', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
  });
  
  test('Validate if Reviewer can Refresh work space by clicking refresh Icon', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptRefresh();
  });  

  test('Validate if Reviewer can enter a string to Seach for by clicking the search Icon', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSearch();
  });

  test('Validate if Reviewer can open the first avilable task by clicking the Start Icon', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptStart();
  });

  test('Validate if Reviewer can close the current task they are working on by clicking the Finish Icon', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptFinish();
  });

  test('Validate if Reviewer can run validation and submit this file as completed', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSubmitFile();
  });
  
  test('Validate if Reviewer can Export an Excel file containing all segments that they have worked on', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSaveToExcel();
  });

  test('Validate if Reviewer can show all segments in the file', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptAll();
  });

  test('Validate if Reviewer can show all avilable segments', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptAvilable();
  });

  test('Validate if Reviewer can show all incomplete segments', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
   await reviewerDashboardPage.clickOnReviewerDashboardManuscriptToDo();  
  });

  test('Validate if Reviewer can show all complete segments', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptUnavilable();
  });

  test('Validate if Reviewer can show all segments that have errors', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptWithErrors();
  });

  test('Validate if Reviewer can focus on the segment that they are working on', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
   await reviewerDashboardPage.clickOnReviewerDashboardManuscriptFocus();
  });

  test('Validate if Reviewer can assign the file to their user', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptUnlockFile();
  });

  test('Validate if Reviewer can toggle focus mode', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptToggleFocusMode();
  });

  test('Validate if Reviewer can toggle all tags', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptToggleAllTags();
  });
  
  test('Validate if Reviewer can edit your manuscript settings', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSettings();
  });

  test('Validate if Reviewer can skip to the next availabe task', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSkip();
  });

  test('Validate if Reviewer can save and go to the next avilable task', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSave();
  });  

  test('Validate if Reviewer can restore the original translation', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptRestore();
  });

  test('Validate if Reviewer can improve the quality and consistency of their translations', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
  });

  test('Validate if Reviewer can evaluate the performance of translators, translation agencies, and the translation process itself', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptMetrics();
  });

  test('Validate if Reviewer can help translators compare two versions of a document or text and identify any differences between them', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptFileConcordance();
  });

  test('Validate if Reviewer can help  ensure that the manuscript is of high quality and meets the standards required for publication', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptValidation();
  });

  test('Validate if Reviewer can add notes to specific parts of a translation project to provide additional context or instructions to the translator or editor', async () => {
    await loginPage.navigate();
    await loginPage.clickOnLoginLink();
    await loginPage.enterEmailAddress(testData.reviewerEmail);
    await loginPage.enterPassword(testData.reviewerPassword);;
    await loginPage.clickOnLoginButton();
    await reviewerDashboardPage.clickOnReviewerDashboard();
    await reviewerDashboardPage.clickOnReviewerDashboardViewPostEditFiles();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscript();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentText();
    await reviewerDashboardPage.clickOnReviewerDashboardManuscriptSegmentComments();
  });


});
  






   
