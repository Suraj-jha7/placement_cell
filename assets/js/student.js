// {  // method to submit the form data for new post using ajax
//     let createStudent = function () {
//         let newForm = $('#new_student_form');
//         newForm.submit(function (e) {
//             e.preventDefault();
            
//             $.ajax({
//                 type: 'post',
//                 url: '/user/add-student',
//                 data: newForm.serialize(),
//                 success: function (data) {
//                     let newStudent = newStudentDOM(data.data.students) 
//                     $('#ajax_student_list').prepend(newStudent)
//                     console.log(data.data.students)
//                 },
//                 error: function (err) {
//                     console.log(err.responseText)
//                 }
//             })
//         })
//     }
//     createStudent()
//     // method to create a post in dom
//     let newStudentDOM = function (student) {
//         return $(`<li id="student_${student._id}">
//                         <a href="">
//                             <h3>${student.name}</h3>
//                         </a>
//                    </li>`
//                 )
//     }

    // function to delete a post in dom using ajax

//     var deletePost = function (clickLink) {
//         $(clickLink).click(function (e) {
//             e.preventDefault();
//             $.ajax({
//                 type: 'get',
//                 url: $(clickLink).prop('href'),
//                 success: function (data) {
//                     $(`#post_${data.data.post_id}`).remove()
//                 },
//                 error: function (err) {
//                     console.log(err.responseText)
//                 }
//             })
//         })
//     }
//  }
