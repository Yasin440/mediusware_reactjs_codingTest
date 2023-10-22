import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContentByCountry = ({ setShowDetails }) => {
  const [usContent, setUsContent] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);
  console.log({ usContent });
  useEffect(() => {
    // fetch all content
    fetch('https://contact.mediusware.com/api/country-contacts/United States/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsContent(data.results);
      })
      .catch((error) => {
        console.error('There was a problem:', error);
      });
  }, []);
  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">US Countries</h5>
            <Link to="/problem-2" className="btn-close" aria-label="Close"></Link>
          </div>
          <div className="modal-body">
            <div class="form-check">
              <input onChange={() => setOnlyEven(!onlyEven)} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                Only Even
              </label>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                  usContent.length === 0 ?
                    <tr className="spinner-border text-primary m-auto" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </tr>
                    :
                    <>
                      {
                        usContent?.map((content, index) => {
                          if (onlyEven && content.id % 2 !== 0) return null;
                          return (
                            <tr key={index} onClick={() => setShowDetails(content)} style={{ cursor: 'pointer' }}>
                              <th scope="row">{content.id}</th>
                              <td>{content.country?.name}</td>
                              <td>{content.phone}</td>
                            </tr>
                          );
                        })
                      }
                    </>
                }
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center gap-3">
              <Link to="/problem-2/all_content" className="btn btn-lg btn-outline-primary" type="button" data-bs-target="#exampleModal" >All Content</Link>
              <Link to="/problem-2/us_country" className="btn btn-lg btn-outline-warning" type="button" >US Contacts</Link>
              <Link to="/problem-2" className="btn btn-lg btn-outline-danger" type="button" >Close</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentByCountry;
