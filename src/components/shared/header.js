import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

function Header({ showLoading }) {
  return (
    <div class="header">
      <h1>
        <Link href="/">Podcaster</Link>
        <div class={`spinner ${showLoading ? '' : 'hidden'}`}>
          <div class="double-bounce1" />
          <div class="double-bounce2" />
        </div>
      </h1>
    </div>
  );
}

export default Header;
