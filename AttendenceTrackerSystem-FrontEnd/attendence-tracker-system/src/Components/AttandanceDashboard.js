import React from "react";

function AttandanceDashboard() {
  return (
    <div class="d-flex justify-content-end">
      <div class="card mt-5 me-5 border border-0" style={{ width: "90rem" }}>
        <div class="card-body">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      EmployeeDetails
                    </a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-1"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    +Employees
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <table class="table border border-2 table-striped table-hover border-opacity-50">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Project</th>
                <th scope="col">WorkingHours</th>
                <th scope="col">Descrption</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Jacob</td>
                <td>Otto</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary me-1 rounded-pill"
                    style={{ width: "75px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger ms-1 rounded-pill"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>@twitter</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary me-1 rounded-pill"
                    style={{ width: "75px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger ms-1 rounded-pill"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>Larry the Bird</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary me-1 rounded-pill"
                    style={{ width: "75px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger ms-1 rounded-pill"
                  >
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Jacob</td>
                <td>@twitter</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-outline-primary me-1 rounded-pill"
                    style={{ width: "75px" }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger ms-1 rounded-pill"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Showing 1 to 1 of 1 entries
                    </a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <button type="button" class="btn btn-outline-primary">
                    next
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default AttandanceDashboard;
