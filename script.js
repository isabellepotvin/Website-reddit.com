// JavaScript Document

function vote() {
	votes = document.getElementById("votes");
	count = parseInt(votes.innerHTML);
	count++;
	votes.innerHTML = count;
}

function votedown() {
	votes = document.getElementById("votes");
	count = parseInt(votes.innerHTML);
	count--;
	votes.innerHTML = count;
}