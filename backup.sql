CREATE TABLE `motivacion` (
  `id` int(11) NOT NULL,
  `dateOfPublication` date NOT NULL,
  `author` text(40) NOT NULL,
  `quote` varchar(255) NOT NULL DEFAULT '',
  `isMotivated` boolean
) ;

ALTER TABLE `motivacion` ADD PRIMARY KEY (`id`);
ALTER TABLE `motivacion` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO motivacion (dateOfPublication, author, quote, isMotivated) VALUES
('1981-07-06','Walt Disney', 'The way to get started is to quit talking and begin doing.', true),
('1982-03-17','Winston Churchill', 'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficult.', true),
('1990-10-23','Will Rogers', 'Don’t let yesterday take up too much of today.', true),
('1983-05-30','Unknown', 'You learn more from failure than from success. Don’t let it stop you. Failure builds character.', true),
('2012-03-06','Vince Lombardi', 'It’s not whether you get knocked down, it’s whether you get up.', true),
('2008-12-05','Steve Jobs', 'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.', true),
('2012-09-21','Rob Siltanen', 'People who are crazy enough to think they can change the world, are the ones who do.', true),
('1981-07-06','Og Mandino', 'Failure will never overtake me if my determination to succeed is strong enough.', true),
('2012-03-06','Mohnish Pabrai', 'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.', true),
('2011-06-10','Maya Angelou', 'We may encounter many defeats but we must not be defeated.', true),
('1994-01-25','J. Wolfgang Von Goethe', 'Knowing is not enough; we must apply. Wishing is not enough; we must do.', true),
('1982-03-17','Brian Tracy', 'Imagine your life is perfect in every respect; what would it look like?.', true),
('1989-03-20','Dr. Henry Link', 'We generate fears while we sit. We overcome them by action.', true),
('2012-09-21','Henry Ford', 'Whether you think you can or think you can’t, you’re right.', true),
('1983-05-30', 'Helen Keller', 'Security is mostly a superstition. Life is either a daring adventure or nothing.', true),
('1990-10-23','Hasidic Proverb', 'The man who has confidence in himself gains the confidence of others.', true),
('1981-07-06','Franklin D. Roosevelt', 'The only limit to our realization of tomorrow will be our doubts of today.', true),
('2011-06-10','Don Zimmer', 'What you lack in talent can be made up with desire, hustle and giving 110% all the time.', true),
('1989-03-20','Albert Einstein', 'Creativity is intelligence having fun.', true),
('1983-05-30','Brian Tracy', 'Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you.', true),
('2011-06-10','C.S. Lewis', 'You are never too old to set another goal or to dream a new dream.', true),
('1982-03-17','Confucius', 'To see what is right and not do it is a lack of courage.', true),
('1983-05-30','Brian Tracy', 'Reading is to the mind, as exercise is to the body.', true),
('1994-01-25','Jack Canfield', 'For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.', true);
