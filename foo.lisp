(defun whoami ()
    (setq user (getenv "USER"))
    (print user))

(whoami)

(defun square (x)
    (* x x))

(print (square 5))

(defun fizzbuzz (n)
    (mapcar (lambda (x)
                (cond ((zerop (mod x 15)) 'fizzbuzz)
                      ((zerop (mod x 5)) 'buzz)
                      ((zerop (mod x 3)) 'fizz)
                      (t x)))
        (loop for i from 1 to n collect i)))

(format t "~{~a~%~}" (fizzbuzz 100))
